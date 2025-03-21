export default async function Page() {
  const letter = process.env.NEXT_PUBLIC_SERVER_URL

  return <div>{letter} should be sealed.?</div>
}
