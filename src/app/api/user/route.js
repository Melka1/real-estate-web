import { NextResponse} from 'next/server'
import {PrismaClient} from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()
 
export async function POST(req) {
  const {name, email, password} = await req.json()
  console.log(name, email, password)

  const userExists = await prisma.User.findUnique({
    where: {
      email
    }
  })

  if (userExists) {
    return new NextResponse(JSON.stringify({message:"User already exists", status:400}),{
      status:400
    })
  }

  const hashed = await bcrypt.hash(password, 10)
  console.log(hashed)
  
  const user = await prisma.User.create({
    data: {
      name,
      email,
      password:(hashed).toString()
    },
  })
  
  return NextResponse.json({name:user.name, email:user.email, role:user.role})
   
}

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  const password = searchParams.get('password')

  const user = await prisma.User.findUnique({
    where: {
      email
    }
  })

  if(!user){
    return new NextResponse(JSON.stringify({message:"User does not exist", status:400}),{
      status:400
    })
  }

  let compare = await bcrypt.compare(password, user.password)

  if(!compare){
    return new NextResponse(JSON.stringify({message:"Incorrect password", status:400}),{
      status:400
    })
  }

  return NextResponse.json({name:user.name, email:user.email, role:user.role})
}