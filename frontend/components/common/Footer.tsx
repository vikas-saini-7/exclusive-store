import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container px-8 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Exclusive Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Exclusive</h2>
            <div className="space-y-2">
              <h3 className="text-sm">Subscribe</h3>
              <p className="text-sm text-gray-400">
                Get 10% off your first order
              </p>
              <div className="flex items-center space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-gray-700"
                />
                <Button size="icon" variant="ghost">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Support</h2>
            <div className="space-y-2 text-sm text-gray-400">
              <p>111 Bijoy sarani, Dhaka,</p>
              <p>DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Account</h2>
            <nav className="space-y-2 text-sm">
              <Link href="/account" className="block hover:text-gray-300">
                My Account
              </Link>
              <Link href="/login" className="block hover:text-gray-300">
                Login / Register
              </Link>
              <Link href="/cart" className="block hover:text-gray-300">
                Cart
              </Link>
              <Link href="/wishlist" className="block hover:text-gray-300">
                Wishlist
              </Link>
              <Link href="/shop" className="block hover:text-gray-300">
                Shop
              </Link>
            </nav>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Quick Link</h2>
            <nav className="space-y-2 text-sm">
              <Link
                href="/privacy-policy"
                className="block hover:text-gray-300"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-gray-300">
                Terms Of Use
              </Link>
              <Link href="/faq" className="block hover:text-gray-300">
                FAQ
              </Link>
              <Link href="/contact" className="block hover:text-gray-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* Download App Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Download App</h2>
            <p className="text-sm text-gray-400">
              Save $3 with App New User Only
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Image
                src="/placeholder.svg"
                alt="QR Code"
                width={100}
                height={100}
                className="bg-white p-2 rounded-lg"
              />
              <div className="space-y-2">
                <Image
                  src="/placeholder.svg"
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="bg-white p-1 rounded-lg"
                />
                <Image
                  src="/placeholder.svg"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="bg-white p-1 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-sm text-gray-400">
              © Copyright Rimel 2022. All right reserved
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
