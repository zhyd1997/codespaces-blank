import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const error = await fetch('https://jsonplaceholder.typicode.com/todo')

  console.error(error)
  return new Response('res: null', { status: 500 })
}
