import DashboardPage from '@/components/templates/DashboardPage'
import connectDB from '@/utils/connectDB'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { User } from '@/models/User'

export default async function Dashboard() {
  await connectDB()
  const session = await getServerSession(authOptions)
  const user = await User.findOne({email : session.user.email})
  return <DashboardPage createdAt = {user.createdAt}/>
}
