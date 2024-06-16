import {Text, View } from 'react-native';
import React from 'react'
import {styled} from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

export default function HomeScreen() {
  return (
    <StyledView className="flex-1  bg-white">
      <StyledView className='m-5 p-5 bg-slate-100 shadow-xl rounded-xl'>
        <StyledText>Hello world</StyledText>
      </StyledView>
    </StyledView>
  )
}