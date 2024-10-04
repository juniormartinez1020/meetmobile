import dayjs from "dayjs";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
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
        </View>
    )
}