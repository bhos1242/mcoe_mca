import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white min-h-screen"></div>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="text-gray-600">
              If you have any questions or would like to reach out, please fill out the form or use the contact information below.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:pradnya.muley@moderncoe.edu.in" className="text-blue-600 hover:underline">pradnya.muley@moderncoe.edu.in</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-500" />
                <span>+91 (020) 2569-6064</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Modern College of Engineering, Pune, India</span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input id="name" type="text" placeholder="Your Name" className="mt-1" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input id="email" type="email" placeholder="Your Email" className="mt-1" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea id="message" placeholder="Your Message" className="mt-1" />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Send Message
            </Button>
          </form>
        </div>
      </div>
      </>
  )
}

export default Contact
