This Fast food C Oh my God Yes And you can do zeros Minecraft you **** Come on you didn't cry Just a cool crack is it so you cry so you make right so right here you can put it anyway I'm wondering Or comes yeah Lower slippery now the Lord is with reason Yeah OK I Is yeah I You don't never want it you know I I OK yeah come on out everybody come on up come on up what OK look it up Out Turn down the heat please I did I None You can actually hurry up you're not showing I need to get an Here's my coffee coffee Yeah What's that So the show comes down here Zumba Zumba I happy faces stop Happy face happy face happy face you're watching happy face happy Facebook I Song Yeah Go talk about that sound I Hookah Hello there Help Be strong you don't have any walk out It's strong energy I Come Jumper jumper 's in a hole Hello Not quite Huh Yeah All right how are you Ah Hello hello O You I Cool right back Zach here's the plan Please listen can you hear me Either either that's great Listen listen we get it in cheerful work but when I'm done keep it listening if if you want to **** you you have to be in the room and by the time I count to 20 so otherwise she's going to lay down she's going to go to sleep and she's going to wait for you to come in and hopefully you sleep but she's going to work i've got work so we're going to go to sleep So counting the 21 if you if you want yeah you got if you want her to i'm turning out like if you want her to reach you then we have to go right then it's happening I know we can always do it I love that you want to learn I know it's great it's huge it's big deal really big Yeah we have something you have to be considered We are very special to your time you have to respect yourself how it's going to lay down with the book and happy painting put it all back I get it I didn't like I got in my imagine I got in my hand To say anything Just put the pin down that's all you can do put the pin down you don't do anything put the pin down and get off the chair 20 seconds 12 34 import React, { useEffect, useState } from 'react'
import { GraduationCap, Users, Briefcase, Heart, ArrowRight, CheckCircle, Filter, Calendar, Clock, MapPin, Star } from 'lucide-react'

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all')
  const [selectedDay, setSelectedDay] = useState('all')

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.fade-in-section')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()