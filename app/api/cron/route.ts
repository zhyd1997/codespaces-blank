import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())

  console.log('test')
  return new Response('res: ', { status: 500 })
}
