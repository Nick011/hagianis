export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Hagianis. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/hagianis" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              GitHub
            </a>
            <a href="https://linkedin.com/in/hagianis" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              LinkedIn
            </a>
            <a href="mailto:contact@hagianis.com" className="hover:text-gray-300">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
