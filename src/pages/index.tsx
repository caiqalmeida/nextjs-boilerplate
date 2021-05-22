type Props = {
  title: string
}

export default function Home({ title = 'Next-js Boilerplate' }: Props) {
  return (
    <div className="">
      <h1>{title}</h1>
    </div>
  )
}
