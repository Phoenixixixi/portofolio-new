import MernText from '@/components/mern-text'
import Card from '@/components/card-logo'
import { useTransform, motion } from 'motion/react'
export default function Stack() {
  const data = [
    {
      title: 'MongoDB',
      desc: 'MongoDB is a high-performance NoSQL database that stores data in flexible, JSON-like documents instead of rigid tables. This structure allows applications to scale easily and handle large amounts of data with diverse formats. With powerful indexing, aggregation, and distributed storage support, MongoDB enables dynamic and fast data processing essential for modern applications in the MERN stack.',
    },
    {
      title: 'Express.js',
      desc: 'Express.js is a minimalist and flexible web framework for Node.js that simplifies server-side development. It helps manage routes, middleware, and APIs efficiently, forming the backbone of the backend in the MERN stack. Its unopinionated design gives developers full control over how they structure applications while maintaining high performance and clean code organization.',
    },
    {
      title: 'React.js',
      desc: 'React.js is a component-based frontend library that enables the creation of highly interactive and dynamic user interfaces. By leveraging the virtual DOM, React optimizes UI rendering for speed and responsiveness. It promotes reusable UI components, one-way data flow, and state management solutions that make complex interfaces scalable and maintainable across the entire application lifecycle.',
    },
    {
      title: 'Node.js',
      desc: 'Node.js is a JavaScript runtime built on Chrome’s V8 engine, allowing JavaScript to run on the server side. Its non-blocking and event-driven architecture supports high concurrency and real-time operations such as chat applications and API services. As the foundation of the MERN stack backend, Node.js enables fast, efficient, and scalable server-side development using a single programming language: JavaScript.',
    },
  ]

  return (
    <div>
      <MernText>
        <div className="grid grid-cols-4 mt-14 gap-x-7">
          {data.map((value, index) => (
            <Card data={value} key={index} />
          ))}
        </div>
      </MernText>
    </div>
  )
}
