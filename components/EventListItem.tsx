import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";


export default function EventListItem({ event }) {
    return (
        <View className='p-5 gap-3'>
        <View className='flex-row'>
          <View className='flex-1 gap-2'>
            <Text
              className='text-lg font-semibold uppercase text-amber-700'
            >
              22 sept,  · 05.30 ET
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
          <FontAwesome name="bookmark-o" size={24} color="gray" />
        </View>
      </View>
    )
}