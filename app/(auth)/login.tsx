import { Stack } from 'expo-router'
import React, { useState } from 'react'
import { Button, Pressable, Text } from 'react-native'
import { Alert, StyleSheet, View, AppState, TextInput } from 'react-native'
import { supabase } from '~/utils/supabase'

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
        email,
        password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  return (
    <View className='p-5 mt-10 bg-slate-50 flex-1 gap-3 pt-10'>

       <Stack.Screen options={{ title: 'Sign in'}} />

        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
          className='border border-gray-200 p-3 rounded-md'
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
          className='border border-gray-200 p-3 rounded-md'
        />

        <View className='flex-row gap-3'>
          <Pressable
              className="flex-1 rounded-md border-2 border-red-400 p-3 px-8 items-center"
              disabled={loading}
              onPress={() => signInWithEmail()}
          >
              <Text className="text-lg font-bold text-red-400">
                Sign In
              </Text>
          </Pressable>

          <Pressable
              className="flex-1 rounded-md bg-red-400 p-3 px-8 items-center"
              disabled={loading}
              onPress={() => signInWithEmail()}
          >
              <Text className="text-lg font-bold text-yellow-50">
                Sign Up
              </Text>
          </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
        
  },
})