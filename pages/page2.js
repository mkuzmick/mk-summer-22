import Link from 'next/link'
import Layout from '../components/layout'
import Box from '../components/box'

export default () => { 
    return (
        <Layout>
            <h1>page 2 here</h1>
            <Link href="/">back to page 1</Link>
            <Box color="rgba(255, 255, 0, 0.8)"/>
            <Box color="rgba(255, 0, 25, 0.8)"/>
            <Box color="rgba(55, 25, 75, 0.8)"/>
            <Box color="rgba(0, 25, 100, 0.8)"/>
            <Box color="rgba(99, 25, 200, 0.8)"/>
            <Box color="rgba(125, 125, 200, 0.8)"/>
            <Box color="rgba(50, 0, 70, 0.8)"/>
        </Layout>
    )
}