export default function Welcome({ title = 'Welcome!' }: { title?: string }) {
  return (
    <div className="welcome">
      <h2>{title}</h2>
      <p>Your application is ready to be built!</p>
    </div>
  )
}