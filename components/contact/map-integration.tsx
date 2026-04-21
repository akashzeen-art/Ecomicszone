"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import { useState } from "react"

const officeLocations = [
  {
    id: 1,
    name: "San Francisco HQ",
    address: "123 Comic Street, San Francisco, CA 94102",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    phone: "+1 (555) 123-4567",
    email: "sf@comicverse.com",
    hours: "Mon-Fri: 9AM-6PM PST",
    type: "Headquarters",
    color: "#FF4C60",
    description: "Our main headquarters and primary development center",
    amenities: ["Visitor parking", "Reception desk", "Meeting rooms", "Comic library"],
  },
  {
    id: 2,
    name: "New York Studio",
    address: "456 Marvel Avenue, New York, NY 10001",
    coordinates: { lat: 40.7128, lng: -74.006 },
    phone: "+1 (555) 234-5678",
    email: "ny@comicverse.com",
    hours: "Mon-Fri: 9AM-6PM EST",
    type: "Creative Studio",
    color: "#4ECDC4",
    description: "Creative hub for content creation and artist collaborations",
    amenities: ["Art studios", "Recording booth", "Creator lounge", "Exhibition space"],
  },
  {
    id: 3,
    name: "London Office",
    address: "789 Superhero Lane, London, UK SW1A 1AA",
    coordinates: { lat: 51.5074, lng: -0.1278 },
    phone: "+44 20 7123 4567",
    email: "london@comicverse.com",
    hours: "Mon-Fri: 9AM-5PM GMT",
    type: "European Hub",
    color: "#FFD93D",
    description: "European operations and international partnerships",
    amenities: ["Conference facilities", "Co-working space", "Café", "Rooftop terrace"],
  },
]

export function MapIntegration() {
  const [selectedOffice, setSelectedOffice] = useState(officeLocations[0])
  const [mapView, setMapView] = useState<"satellite" | "street">("street")

  const handleGetDirections = (office: (typeof officeLocations)[0]) => {
    const query = encodeURIComponent(office.address)
    window.open(`https://maps.google.com/maps?q=${query}`, "_blank")
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#121212] to-[#1E1E2F]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-[#FF4C60]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Visit Our <span className="text-[#FF4C60]">Offices</span>
            </h2>
          </div>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
            Find us around the world. Schedule a visit to our offices and meet the team behind ComicVerse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Office List */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Our Locations</h3>
            {officeLocations.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedOffice.id === office.id
                      ? "bg-[#FF4C60]/10 border-[#FF4C60] comic-shadow"
                      : "bg-[#1E1E2F] border-[#FF4C60]/20 hover:border-[#FF4C60]/40"
                  }`}
                  onClick={() => setSelectedOffice(office)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-white">{office.name}</h4>
                        <Badge
                          className="text-xs mt-1"
                          style={{ backgroundColor: `${office.color}20`, color: office.color }}
                        >
                          {office.type}
                        </Badge>
                      </div>
                      <MapPin className="w-5 h-5 text-[#FF4C60]" />
                    </div>
                    <p className="text-[#B0B0B0] text-sm mb-3">{office.address}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#4ECDC4]" />
                        <span className="text-[#B0B0B0] text-xs">{office.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#FFD93D]" />
                        <span className="text-[#B0B0B0] text-xs">{office.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Map and Office Details */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-[#1E1E2F] border-[#FF4C60]/20 comic-shadow">
                <CardContent className="p-0">
                  {/* Map Header */}
                  <div className="p-6 border-b border-[#FF4C60]/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{selectedOffice.name}</h3>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant={mapView === "street" ? "default" : "outline"}
                          onClick={() => setMapView("street")}
                          className={
                            mapView === "street"
                              ? "bg-[#FF4C60] hover:bg-[#FF4C60]/90"
                              : "border-[#FF4C60]/20 text-[#FF4C60] hover:bg-[#FF4C60]/10"
                          }
                        >
                          Street
                        </Button>
                        <Button
                          size="sm"
                          variant={mapView === "satellite" ? "default" : "outline"}
                          onClick={() => setMapView("satellite")}
                          className={
                            mapView === "satellite"
                              ? "bg-[#FF4C60] hover:bg-[#FF4C60]/90"
                              : "border-[#FF4C60]/20 text-[#FF4C60] hover:bg-[#FF4C60]/10"
                          }
                        >
                          Satellite
                        </Button>
                      </div>
                    </div>
                    <p className="text-[#B0B0B0] text-sm">{selectedOffice.description}</p>
                  </div>

                  {/* Map Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-[#121212] to-[#1E1E2F] flex items-center justify-center">
                    <img
                      src="/dark-world-map.png"
                      alt="World map showing office locations"
                      className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-[#FF4C60] mx-auto mb-2" />
                        <p className="text-white font-medium">{selectedOffice.name}</p>
                        <p className="text-[#B0B0B0] text-sm">{selectedOffice.address}</p>
                      </div>
                    </div>
                    {/* Interactive map markers */}
                    {officeLocations.map((office) => (
                      <motion.div
                        key={office.id}
                        className="absolute cursor-pointer"
                        style={{
                          left: `${20 + office.id * 25}%`,
                          top: `${30 + office.id * 15}%`,
                        }}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setSelectedOffice(office)}
                      >
                        <div
                          className={`w-4 h-4 rounded-full border-2 border-white ${
                            selectedOffice.id === office.id ? "animate-pulse" : ""
                          }`}
                          style={{ backgroundColor: office.color }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Office Details */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">Contact Information</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-[#FF4C60]" />
                            <span className="text-[#B0B0B0] text-sm">{selectedOffice.address}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-[#4ECDC4]" />
                            <span className="text-[#B0B0B0] text-sm">{selectedOffice.phone}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-[#FFD93D]" />
                            <span className="text-[#B0B0B0] text-sm">{selectedOffice.email}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="w-4 h-4 text-[#4CAF50]" />
                            <span className="text-[#B0B0B0] text-sm">{selectedOffice.hours}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-3">Amenities</h4>
                        <div className="space-y-2">
                          {selectedOffice.amenities.map((amenity) => (
                            <div key={amenity} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#4CAF50] rounded-full" />
                              <span className="text-[#B0B0B0] text-sm">{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={() => handleGetDirections(selectedOffice)}
                        className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white comic-shadow hover:animate-pulse-glow flex-1"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button
                        variant="outline"
                        className="border-[#4ECDC4]/20 text-[#4ECDC4] hover:bg-[#4ECDC4]/10 bg-transparent flex-1"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View on Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Visit Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-[#4ECDC4]/10 to-[#FFD93D]/10 border-[#FF4C60]/20 comic-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Planning a Visit?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#FF4C60]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-[#FF4C60]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Schedule Ahead</h4>
                  <p className="text-[#B0B0B0] text-sm">
                    Please contact us 24 hours in advance to schedule your visit and ensure someone is available to meet
                    you.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#4ECDC4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-[#4ECDC4]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Parking Available</h4>
                  <p className="text-[#B0B0B0] text-sm">
                    All our offices have visitor parking available. Look for designated ComicVerse visitor spots.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#FFD93D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-[#FFD93D]" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Need Directions?</h4>
                  <p className="text-[#B0B0B0] text-sm">
                    Call our main reception and we'll provide detailed directions and help coordinate your visit.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
