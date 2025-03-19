import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-sky-600 flex items-center justify-center">
              <span className="text-white font-bold">SC</span>
            </div>
            <span className="font-bold text-xl">Thokoza Swimming Club</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#membership" className="text-sm font-medium hover:underline underline-offset-4">
              Membership
            </Link>
            <Link href="#schedule" className="text-sm font-medium hover:underline underline-offset-4">
              Schedule
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Swimming pool"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 text-white">
            <div className="flex flex-col items-start gap-4 md:max-w-[60%]">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Dive into Excellence
              </h1>
              <p className="max-w-[600px] text-lg sm:text-xl md:text-2xl">
                Join our premier swimming club and experience world-class facilities, expert coaching, and a vibrant
                community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                  Join Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  View Schedule
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 bg-sky-50">
          <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-center">
            <div className="space-y-4 lg:col-span-1">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Thokoza Swimming Club</h2>
              <p className="text-muted-foreground">
                Founded in 2013, Thokoza Swimming  Club has been the premier destination for swimming enthusiasts of all ages and
                skill levels.
              </p>
              <p className="text-muted-foreground">
                Our state-of-the-art facilities include Olympic-sized pools, professional coaching staff, and a
                supportive community dedicated to aquatic excellence.
              </p>
            </div>
            <div className="grid gap-6 md:col-span-1 lg:col-span-2">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2 p-6 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-sky-100 rounded-full w-fit">
                    <Users className="h-6 w-6 text-sky-700" />
                  </div>
                  <h3 className="text-xl font-bold">Expert Coaching</h3>
                  <p className="text-muted-foreground">
                    Our certified coaches provide personalized training for swimmers of all levels.
                  </p>
                </div>
                <div className="flex flex-col gap-2 p-6 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-sky-100 rounded-full w-fit">
                    <MapPin className="h-6 w-6 text-sky-700" />
                  </div>
                  <h3 className="text-xl font-bold">Modern Facilities</h3>
                  <p className="text-muted-foreground">
                    Olympic-sized pools, heated indoor pools, and state-of-the-art equipment.
                  </p>
                </div>
                <div className="flex flex-col gap-2 p-6 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-sky-100 rounded-full w-fit">
                    <Calendar className="h-6 w-6 text-sky-700" />
                  </div>
                  <h3 className="text-xl font-bold">Diverse Programs</h3>
                  <p className="text-muted-foreground">
                    From competitive swimming to water aerobics, we offer programs for everyone.
                  </p>
                </div>
                <div className="flex flex-col gap-2 p-6 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-sky-100 rounded-full w-fit">
                    <Clock className="h-6 w-6 text-sky-700" />
                  </div>
                  <h3 className="text-xl font-bold">Flexible Hours</h3>
                  <p className="text-muted-foreground">
                    Open early mornings to late evenings to accommodate all schedules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="membership" className="w-full py-12 md:py-24">
          <div className="container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Membership Plans</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Choose the membership plan that fits your needs. All plans include access to our facilities, locker
                rooms, and basic amenities.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm border border-sky-100 relative">
                <div className="absolute top-0 right-0 bg-sky-100 text-sky-700 px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                  Basic
                </div>
                <div className="mt-8 space-y-4">
                  <h3 className="text-2xl font-bold">Individual</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">R49</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-sky-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Pool access (6am-8pm)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-sky-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Locker room access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-sky-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Group classes (2/week)</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-sky-600 hover:bg-sky-700">Select Plan</Button>
                </div>
              </div>
              <div className="flex flex-col p-6 bg-sky-600 text-white rounded-lg shadow-md relative">
                <div className="absolute top-0 right-0 bg-yellow-400 text-sky-900 px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
                <div className="mt-8 space-y-4">
                  <h3 className="text-2xl font-bold">Family</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">R89</span>
                    <span className="text-sky-100">/month</span>
                  </div>
                  <ul className="space-y-2 text-sky-100">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Pool access (5am-10pm)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Up to 4 family members</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Group classes (unlimited)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>1 private lesson/month</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-white text-sky-600 hover:bg-sky-50">Select Plan</Button>
                </div>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm border border-sky-100 relative">
                <div className="absolute top-0 right-0 bg-sky-100 text-sky-700 px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                  Premium
                </div>
                <div className="mt-8 space-y-4">
                  <h3 className="text-2xl font-bold">Elite</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">R129</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-sky-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>24/7 pool access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-sky-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>All amenities included</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-sky-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>4 private lessons/month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-sky-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Priority booking</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-4 bg-sky-600 hover:bg-sky-700">Select Plan</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className="w-full py-12 md:py-24 bg-sky-50">
          <div className="container space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pool Schedule</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Our pools are open daily with dedicated times for different activities. Check the schedule to plan your
                visit.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-sky-600 text-white">
                    <th className="p-4 text-left">Time</th>
                    <th className="p-4 text-left">Monday</th>
                    <th className="p-4 text-left">Tuesday</th>
                    <th className="p-4 text-left">Wednesday</th>
                    <th className="p-4 text-left">Thursday</th>
                    <th className="p-4 text-left">Friday</th>
                    <th className="p-4 text-left">Weekend</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">5:00 - 7:00</td>
                    <td className="p-4">Lap Swim</td>
                    <td className="p-4">Lap Swim</td>
                    <td className="p-4">Lap Swim</td>
                    <td className="p-4">Lap Swim</td>
                    <td className="p-4">Lap Swim</td>
                    <td className="p-4">Lap Swim</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">7:00 - 9:00</td>
                    <td className="p-4">Swim Team</td>
                    <td className="p-4">Water Aerobics</td>
                    <td className="p-4">Swim Team</td>
                    <td className="p-4">Water Aerobics</td>
                    <td className="p-4">Swim Team</td>
                    <td className="p-4">Open Swim</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">9:00 - 12:00</td>
                    <td className="p-4">Lessons</td>
                    <td className="p-4">Lessons</td>
                    <td className="p-4">Lessons</td>
                    <td className="p-4">Lessons</td>
                    <td className="p-4">Lessons</td>
                    <td className="p-4">Family Swim</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">12:00 - 2:00</td>
                    <td className="p-4">Open Swim</td>
                    <td className="p-4">Open Swim</td>
                    <td className="p-4">Open Swim</td>
                    <td className="p-4">Open Swim</td>
                    <td className="p-4">Open Swim</td>
                    <td className="p-4">Open Swim</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">2:00 - 4:00</td>
                    <td className="p-4">Youth Program</td>
                    <td className="p-4">Youth Program</td>
                    <td className="p-4">Youth Program</td>
                    <td className="p-4">Youth Program</td>
                    <td className="p-4">Youth Program</td>
                    <td className="p-4">Open Swim</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">4:00 - 8:00</td>
                    <td className="p-4">Open Swim</td>
                    <td className="p-4">Open Swim</td>
                    <td className="p-4">Open Swim</td>
                    <td className="p-4">Open Swim</td>
                    <td className="p-4">Open Swim</td>
                    <td className="p-4">Open Swim</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24">
          <div className="container grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
              <p className="text-muted-foreground">
                Have questions about our facilities or membership plans? Get in touch with our team and we'll be happy
                to help.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-sky-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">50 Khumalo street </p>
                    <p className="text-muted-foreground">Thokoza </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-sky-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 5:00 AM - 10:00 PM</p>
                    <p className="text-muted-foreground">Saturday - Sunday: 6:00 AM - 8:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="h-5 w-5 text-sky-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">thokozaswimmingclub@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="h-5 w-5 text-sky-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">060 768 3867</p>
                    <p className="text-muted-foreground">060 768 3867</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First name
                    </label>
                    <input
                      id="first-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last name
                    </label>
                    <input
                      id="last-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Membership inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Type your message here."
                  />
                </div>
                <Button className="w-full bg-sky-600 hover:bg-sky-700">Send Message</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:h-24">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-sky-600 flex items-center justify-center">
              <span className="text-white font-bold">SC</span>
            </div>
            <span className="font-bold">Thokoza Swimming Club</span>
          </div>
          <div className="text-center md:text-left text-sm text-muted-foreground">
          Thokoza Swimming Club. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

