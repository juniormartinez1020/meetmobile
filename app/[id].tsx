import dayjs from "dayjs";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import events from '~/assets/events.json'

export default function EventPage() {

    const { id } = useLocalSearchParams()

    const event = events.find((e) => e.id === id)

    if (!event) {
        return <Text>event not found</Text>
    }

    return (
        <View className="flex-1 gap-3 bg-yellow-50 p-3">

            <Stack.Screen 
            options={{ title: 'Event', headerBackTitleVisible: false }}
            />

            <Image
                source={{ uri: event.image }}
                className='aspect-video w-full rounded-xl'
            />
            <Text className="text-3xl font-bold" numberOfLines={2}>
                {event.title}
            </Text>
            <Text
                className='text-lg font-semibold uppercase text-amber-700'
            >
                {dayjs(event.datetime).format('ddd, D MMM')}  ·
                {dayjs(event.datetime).format('h:mm A')}
            </Text>
           
            <Text className="text-lg" numberOfLines={2}>
                {event.description}
            </Text>


            {/* footer comp */}
            <View
            className="absolute bottom-0 left-0 right-0 border-t-2
            border-slate-300 p-5 pb-10 flex-row justify-between items-center"
            >
                <Text
                className="text-xl font-semibold"
                >
                    Free on
                </Text>

                <Pressable
                className="rounded-md bg-red-400 p-5 px-8"
                >
                    <Text className="text-lg font-bold text-yellow-50">Join & RSVS</Text>
                </Pressable>
            </View>
        </View>
    )
}