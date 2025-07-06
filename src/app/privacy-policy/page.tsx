import Container from '@/components/Container'
import PricingCard from '@/components/PricingCard'
import React from 'react'

export default function page() {
  return (
    <Container className='py-32'>
      <h1>Kebijakan Privasi & Syarat Layanan</h1>
      <div className='flex items-start justify-center gap-8 flex-wrap'>
        <PricingCard />
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </Container>
  )
}
