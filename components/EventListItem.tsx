import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import dayjs from 'dayjs'


export default function EventListItem({ event }) {
    return (
        <View className='p-5 gap-3 border-b-2 border-gray-200 pb-3'>
        <View className='flex-row'>
          <View className='flex-1 gap-2'>
            <Text
              className='text-lg font-semibold uppercase text-amber-700'
            >
             {dayjs(event.datetime).format('ddd, D MMM')}  · 
             {dayjs(event.datetime).format('h:mm A')}
            </Text>
            <Text
              className='text-xl font-bold'
            >
             {event.title}
            </Text>
            <Text
              className='text-gray-500'
            >
              {event.location}
            </Text>
          </View>


          {/* event image */}
          <Image
            source={{ uri: event.image }}
            className='aspect-video w-2/5 rounded-xl'
          />
        </View>


        {/* footer */}
        <View
          className='flex-row gap-3'
        >
          <Text
            className='mr-auto text-gray-500'
          >
            15 going
          </Text>
          <Entypo name="share-alternative" size={20} color="gray" />
          <FontAwesome name="bookmark-o" size={20} color="gray" />
        </View>
      </View>
    )
}