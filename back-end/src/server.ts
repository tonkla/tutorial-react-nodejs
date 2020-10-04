import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const port = process.env.PORT || 8080
app.listen({ port }, async () => console.log(`🚀 API launched on port ${port}`))
