'use client';

import Image from "next/image";
import { Instagram, Facebook, MessageCircle, Twitter, Youtube, Music } from 'lucide-react';

export default function Home(){
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-[70vh] md:min-h-screen overflow-hidden">
        {/* Background video */}
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover object-[20%_10%] md:object-center"
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/images/video-poster.jpg"
        >
          <source src="https://www.pexels.com/download/video/7992373/" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center px-4 min-h-[70vh] md:min-h-screen">
          <div className="md:col-span-2 text-center">
            <h1 className="text-white">
              <span className="hero-line-1 block text-3xl md:text-5xl lg:text-5xl mb-2">Rooted Perinatal Education Collective</span>
            </h1>
            <p className="mt-6 text-base md:text-xl text-white/90 max-w-prose mx-auto">
              <span className="font-quicksand">Welcome to where education takes root. Providing accessible, inclusive perinatal education, lactation support, and community-based resources that center equity and empowerment for all birthing people.</span>
            </p>
            <div className="mt-8 flex flex-row gap-3 justify-center">
              <ContactButton />
              <a className="btn bg-white text-char shadow-card hover:opacity-90 active:translate-y-[1px] transition focus-visible:outline-rose focus-visible:outline-2 text-base px-6 py-3 w-32 sm:w-auto" href="#services">
                <span className="md:hidden">Services</span>
                <span className="hidden md:inline">View Services</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-gradient-to-br from-forest/20 via-moss/15 to-sage/10 rounded-brand">
        <div className="mx-auto max-w-6xl px-4">
          <div className="bg-white rounded-brand p-8 mb-8 shadow-card">
            <h1 className="text-cocoa text-5xl text-center">Services</h1>
            <p className="mt-4 text-char/90 max-w-prose font-helvetica font-light italic text-center mx-auto text-[17px]">
              At Rooted Perinatal Education Collective, I offer heart-centered support to guide you through pregnancy, birth, and the early days of parenthood.
            </p>
          </div>
          
          <div>
            <div className="w-full h-2 bg-gradient-to-r from-forest via-moss to-sage rounded-full mb-6"></div>
            <h2 className="text-cocoa text-3xl md:text-3xl text-center md:text-left" style={{ fontSize: 'clamp(26px, 4vw, 30px)' }}>Prenatal Breastfeeding Packages</h2>

            <div className="card p-6 md:p-8 mt-6">
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="w-full h-48 md:h-full md:aspect-square mb-4 md:mb-0 md:order-2">
                  <Image 
                    src="/images/pexels-serdi-19178588.jpg" 
                    alt="Mother breastfeeding baby - prenatal breastfeeding preparation" 
                    className="w-full h-full object-cover rounded-brand"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="md:order-1">
                  <h3 className="text-forest text-2xl font-quicksand font-black">Private 1:1 Prenatal Breastfeeding Prep</h3>
                  <div className="text-cocoa font-semibold text-xl mt-2 font-quicksand">— $85 (In-Person or Virtual)</div>
                  <ul className="mt-4 list-disc pl-5 text-char/90 space-y-1 font-quicksand">
                    <li>Personalized, 75-minute session for expectant parents</li>
                    <li>What to expect the first week of breastfeeding</li>
                    <li>Latch & positioning education</li>
                    <li>How to tell if baby is getting enough milk</li>
                    <li>Common breastfeeding myths & challenges</li>
                    <li>Pumping, milk storage, and return-to-work prep</li>
                    <li>Creating your personalized feeding plan</li>
                    <li>Partner involvement & support tips</li>
                    <li>Take-home resources + 1 week of text/email support</li>
                  </ul>
                  <div className="mt-4">
                    <ContactButton />
                  </div>
                  <div className="mt-4 text-char/80">
                    <p className="font-quicksand">Everyone deserves nurturing support. If cost is a concern, please contact me to discuss sliding scale options or referrals.</p>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} className="underline text-cocoa hover:opacity-80 bg-transparent border-none p-0 font-quicksand cursor-pointer">Need financial support? Contact Us →</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 md:p-8 mt-6">
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="w-full h-48 md:h-full md:aspect-square mb-4 md:mb-0 md:order-2">
                  <Image 
                    src="/images/screenshot-2023-01-16-124221-1024x691 copy.jpg" 
                    alt="Small group prenatal breastfeeding class - interactive learning environment" 
                    width={1024}
                    height={691}
                    className="w-full h-full object-cover rounded-brand"
                  />
                </div>
                <div className="md:order-1">
                  <h3 className="text-forest text-2xl font-quicksand font-black">Small Group Prenatal Breastfeeding Class</h3>
                  <div className="text-cocoa font-semibold text-xl mt-2 font-quicksand">— $45/person or $75/couple — 90-minute session</div>
                  <ul className="mt-4 list-disc pl-5 text-char/90 space-y-1 font-quicksand">
                    <li>Key breastfeeding basics: latch, milk supply, feeding cues</li>
                    <li>Breastfeeding in the first 24–48 hours</li>
                    <li>How to build confidence and avoid common issues</li>
                    <li>Q&A and interactive discussion</li>
                    <li>Printed resources or digital handouts</li>
                  </ul>
                  <div className="mt-4">
                    <ContactButton />
                  </div>
                  <div className="mt-4 text-char/80">
                    <p className="font-quicksand">Everyone deserves nurturing support. If cost is a concern, please contact me to discuss sliding scale options or referrals.</p>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} className="underline text-cocoa hover:opacity-80 bg-transparent border-none p-0 font-quicksand cursor-pointer">Need financial support? Contact Us →</button>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-12 border-rose/40" id="postpartum" />
            <div className="w-full h-2 bg-gradient-to-r from-earth via-bark to-forest rounded-full mb-6"></div>
            <h2 className="text-cocoa text-3xl md:text-3xl text-center md:text-left" style={{ fontSize: 'clamp(26px, 4vw, 30px)' }}>Lactation & Postpartum Support</h2>

            <div className="card p-6 md:p-8 mt-6">
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="w-full h-48 md:h-full md:aspect-square mb-4 md:mb-0 md:order-2">
                  <Image 
                    src="/images/d7510-black-breastfeeding-mom.jpg" 
                    alt="Single lactation consultation - personalized breastfeeding support" 
                    className="w-full h-full object-cover rounded-brand"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="md:order-1">
                  <h3 className="text-forest text-2xl font-quicksand font-black">Single Lactation Support Visit — $95</h3>
                  <div className="text-char/90 mt-2 font-quicksand">1 hour, virtual or in-home</div>
                  <ul className="mt-4 list-disc pl-5 text-char/90 space-y-1 font-quicksand">
                    <li>Personalized feeding guidance and latch support</li>
                    <li>Tips on pumping, milk supply, and managing common challenges</li>
                    <li>Text/email follow-up for 48 hours after the visit</li>
                  </ul>
                  <div className="mt-4">
                    <ContactButton />
                  </div>
                  <div className="mt-4 text-char/80">
                    <p className="font-quicksand">Everyone deserves nurturing support. If cost is a concern, please contact me to discuss sliding scale options or referrals.</p>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} className="underline text-cocoa hover:opacity-80 bg-transparent border-none p-0 font-quicksand cursor-pointer">Need financial support? Contact Us →</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 md:p-8 mt-6">
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="w-full h-48 md:h-full md:aspect-square mb-4 md:mb-0 md:order-2">
                  <Image 
                    src="/images/6151cdd15d7ba.webp" 
                    alt="Back-to-work breastfeeding support - pumping and workplace guidance" 
                    className="w-full h-full object-cover rounded-brand"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="md:order-1">
                  <h3 className="text-forest text-2xl font-quicksand font-black">Back-to-Work Support Package: "Rooted & Returning" — $175–$200</h3>
                  <div className="text-char/90 mt-2 font-quicksand">Two 1–1.5 hour visits (virtual or in-home) — one before returning to work, one after</div>
                  <ul className="mt-4 list-disc pl-5 text-char/90 space-y-1 font-quicksand">
                    <li>Guidance on pumping schedules, milk storage, and maintaining supply</li>
                    <li>Personalized plan for navigating workplace challenges</li>
                    <li>Latch and feeding assessments as needed</li>
                    <li>Text/email follow-up for 2 weeks after final visit</li>
                    <li>Optional additional check-ins at discounted rate</li>
                  </ul>
                  <div className="mt-4">
                    <ContactButton />
                  </div>
                  <div className="mt-4 text-char/80">
                    <p className="font-quicksand">Everyone deserves nurturing support. If cost is a concern, please contact me to discuss sliding scale options or referrals.</p>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} className="underline text-cocoa hover:opacity-80 bg-transparent border-none p-0 font-quicksand cursor-pointer">Need financial support? Contact Us →</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 md:p-8 mt-6">
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="w-full h-48 md:h-full md:aspect-square mb-4 md:mb-0 md:order-2">
                  <Image 
                    src="/images/0000016e-905c-d934-a5ef-b27fef880000.webp" 
                    alt="Postpartum doula providing nurturing support to new mother and baby" 
                    className="w-full h-full object-cover rounded-brand"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="md:order-1">
                  <h3 className="text-forest text-2xl font-quicksand font-black">Nourish & Nurture Postpartum Package — $500</h3>
                  <div className="text-char/90 mt-2 font-quicksand">Three in-home visits, 2 hours each (6 total hours) over 2–3 weeks</div>
                  <ul className="mt-4 list-disc pl-5 text-char/90 space-y-1 font-quicksand">
                    <li>Lactation support</li>
                    <li>Light housekeeping (dishes, laundry, nursery tidying)</li>
                    <li>Nourishing meal or snack prep</li>
                    <li>Infant care while you rest or shower</li>
                    <li>Herbal wellness support: teas and sitz bath herbs with preparation guidance</li>
                    <li>Emotional check-ins and postpartum mental health encouragement</li>
                    <li>Personalized resource referrals</li>
                  </ul>
                  <div className="mt-4">
                    <ContactButton />
                  </div>
                  <div className="mt-4 text-char/80">
                    <p className="font-quicksand">Everyone deserves nurturing support. If cost is a concern, please contact me to discuss sliding scale options or referrals.</p>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} className="underline text-cocoa hover:opacity-80 bg-transparent border-none p-0 font-quicksand cursor-pointer">Need financial support? Contact Us →</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 md:p-8 mt-6">
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="w-full h-48 md:h-full md:aspect-square mb-4 md:mb-0 md:order-2">
                  <Image 
                    src="/images/AHP_4684.webp" 
                    alt="Lactation consultant providing personalized breastfeeding support and guidance" 
                    className="w-full h-full object-cover rounded-brand"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="md:order-1">
                  <h3 className="text-forest text-2xl font-quicksand font-black">Lactation Support Package (3 Visits) — $250</h3>
                  <div className="text-char/90 mt-2 font-quicksand">Three 1–1.5 hour visits (total 3–4.5 hours), virtual or in-home</div>
                  <ul className="mt-4 list-disc pl-5 text-char/90 space-y-1 font-quicksand">
                    <li>Personalized feeding guidance and latch support</li>
                    <li>Individualized care plans and breastfeeding education</li>
                    <li>Tips on pumping, milk supply, and managing common challenges</li>
                    <li>Text/email follow-up for 2 weeks after the final visit</li>
                  </ul>
                  <div className="mt-4">
                    <ContactButton />
                  </div>
                  <div className="mt-4 text-char/80">
                    <p className="font-quicksand">Everyone deserves nurturing support. If cost is a concern, please contact me to discuss sliding scale options or referrals.</p>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} className="underline text-cocoa hover:opacity-80 bg-transparent border-none p-0 font-quicksand cursor-pointer">Need financial support? Contact Us →</button>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-12 border-rose/40" id="lactation" />
            <div className="w-full h-2 bg-gradient-to-r from-sage via-moss to-forest rounded-full mb-6"></div>
            <h2 className="text-cocoa text-3xl md:text-3xl text-center md:text-left" style={{ fontSize: 'clamp(26px, 4vw, 30px)' }}>À La Carte Services</h2>

            <div className="card p-6 md:p-8 mt-6">
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="w-full h-48 md:h-full md:aspect-square mb-4 md:mb-0 md:order-2">
                  <Image 
                    src="/images/parents+new+baby+postpartum+doula+support+in+Toronto+home.webp" 
                    alt="Postpartum doula providing in-home support to new parents and baby" 
                    className="w-full h-full object-cover rounded-brand"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="md:order-1">
                  <h3 className="text-forest text-2xl font-quicksand font-black">Postpartum Doula Support (In-Home)</h3>
                  <div className="text-cocoa font-semibold text-xl mt-2 font-quicksand">— $45/hour (minimum 2-hour visits)</div>
                  <p className="mt-4 text-char/90 font-quicksand">Includes light tidying or snack prep, infant support while you rest, emotional support and resource sharing.</p>
                  <div className="mt-4">
                    <ContactButton />
                  </div>
                  <div className="mt-4 text-char/80">
                    <p className="font-quicksand">Everyone deserves nurturing support. If cost is a concern, please contact me to discuss sliding scale options or referrals.</p>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} className="underline text-cocoa hover:opacity-80 bg-transparent border-none p-0 font-quicksand cursor-pointer">Need financial support? Contact Us →</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 md:p-8 mt-6">
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="w-full h-48 md:h-full md:aspect-square mb-4 md:mb-0 md:order-2">
                  <Image 
                    src="/images/The-Affordable-Care-Act-and-Breastfeeding-NestCollaborative.jpg.webp" 
                    alt="Lactation services - professional support for breastfeeding families" 
                    className="w-full h-full object-cover rounded-brand"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="md:order-1">
                  <h3 className="text-forest text-2xl font-quicksand font-black">Lactation Services (In-Home or Virtual)</h3>
                  <ul className="mt-4 list-disc pl-5 text-char/90 space-y-1 font-quicksand">
                    <li>Initial Consult (60–75 mins): $85</li>
                    <li>Extended Initial Consult (up to 2 hours): $150</li>
                    <li>Virtual Support (30–60 mins): $75</li>
                  </ul>
                  <div className="mt-4">
                    <ContactButton />
                  </div>
                  <div className="mt-4 text-char/80">
                    <p className="font-quicksand">Everyone deserves nurturing support. If cost is a concern, please contact me to discuss sliding scale options or referrals.</p>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} className="underline text-cocoa hover:opacity-80 bg-transparent border-none p-0 font-quicksand cursor-pointer">Need financial support? Contact Us →</button>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-12 border-rose/40" />
            <div className="w-full h-2 bg-gradient-to-r from-honey via-rose to-sage rounded-full mb-6"></div>
            <h2 className="text-cocoa text-3xl md:text-3xl text-center md:text-left" style={{ fontSize: 'clamp(26px, 4vw, 30px)' }}>Optional Add-Ons</h2>

            <div className="card p-6 md:p-8 mt-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-rose/20 pb-3">
                  <span className="text-forest font-quicksand font-semibold">Extra 30-min follow-up call or virtual check-in</span>
                  <span className="text-cocoa font-quicksand font-bold">$35</span>
                </div>
                <div className="flex justify-between items-center border-b border-rose/20 pb-3">
                  <span className="text-forest font-quicksand font-semibold">Additional in-home visit</span>
                  <span className="text-cocoa font-quicksand font-bold">$90</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-forest font-quicksand font-semibold">Pumping / milk supply consultation</span>
                  <span className="text-cocoa font-quicksand font-bold">$50</span>
                </div>
              </div>
              <div className="mt-6">
                <ContactButton />
              </div>
              <div className="mt-4 text-char/80">
                <p className="font-quicksand">Everyone deserves nurturing support. If cost is a concern, please contact me to discuss sliding scale options or referrals.</p>
                <button onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} className="underline text-cocoa hover:opacity-80 bg-transparent border-none p-0 font-quicksand cursor-pointer">Need financial support? Contact Us →</button>
              </div>
            </div>

            <hr className="my-12 border-rose/40" />
            <div className="w-full h-2 bg-gradient-to-r from-honey via-rose to-sage rounded-full mb-6"></div>
            <h2 className="text-cocoa text-3xl md:text-3xl text-center md:text-left" style={{ fontSize: 'clamp(26px, 4vw, 30px)' }}>Important Notice</h2>

            <div className="card p-6 md:p-8 mt-6">
              <p className="text-char/90 font-quicksand">
                Services are provided by a Certified Lactation Specialist / Breastfeeding Consultant. Packages offer guidance, education, and support, but do not replace care from an IBCLC or healthcare provider. I am supervised by two accessible IBCLCs for more complex appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-forest">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
          <div>
            <div className="w-full h-full">
              <Image 
                src="/images/photo_2_2025-08-17_13-58-52.jpg" 
                alt="Tanya Butler - Certified Lactation Specialist and Perinatal Health Worker" 
                className="w-full h-full object-cover rounded-brand"
                width={800}
                height={600}
              />
            </div>
            <p className="mt-2 text-white font-helvetica font-bold italic">
              Tanya Butler, CLS, CBC, PHW, Doula, Birth Assistant
              <br />
              <br />
            </p>
          </div>
          <div>
            <h1 className="text-white text-3xl md:text-4xl mt-12 md:mt-8">Hi, I'm Tanya — the heart behind Rooted.</h1>
            <style jsx>{`
              @media (max-width: 767px) {
                h1 {
                  font-size: 28px !important;
                }
              }
            `}</style>
            <p className="mt-4 text-white/90 font-helvetica font-light">
              I'm a Perinatal Health Worker, birth assistant in–training, Certified Lactation Specialist,
              Breastfeeding Consultant, and birth and postpartum doula committed to walking with families
              through one of the most sacred seasons of life—pregnancy, birth, and early parenting.
            </p>
            <p className="mt-3 text-white/90 font-helvetica font-light">
              Rooted Perinatal Education Collective was created to fill a gap in our local community especially
              for "Black" and "Brown" families who often don't see themselves represented in perinatal and
              lactation spaces. Our mission is to provide culturally-centered, evidence-based support so every
              family feels seen, safe, and confident while nourishing and bonding with their baby.
            </p>
            <p className="mt-3 text-white/90 font-helvetica font-light">
              While I truly love supporting birthing people in all stages of the perinatal journey, my deepest
              passion is empowering families in their breastfeeding/human milk feeding experience.
            </p>
            <p className="mt-3 text-white/90 font-helvetica font-light">
              My approach is warm, inclusive, and grounded in lived experience. I believe guidance should be
              judgment-free, questions should always be welcome, and care should reflect the culture and
              values of the families being served.
            </p>
            <p className="mt-3 text-white/90 font-helvetica font-light">
              In addition to lactation care, I work alongside a local midwife as a birth assistant in-training and
              help connect families to trusted, community-based resources throughout the DMV.
            </p>

            <h2 className="text-white text-2xl mt-6">Services Offered:</h2>
            <ul className="list-disc pl-5 text-white/90 space-y-1 mt-2 font-helvetica font-light">
              <li>Prenatal Breastfeeding/Human Milk Education</li>
              <li>Postpartum lactation support</li>
              <li>Birth and Postpartum Doula Services</li>
              <li>Community resource connections</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <ContactButton />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* Community Care Initiative Section */}
      <section id="community" className="section bg-gradient-to-br from-sage/20 via-rose/15 to-honey/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="bg-white rounded-brand p-8 mb-8 shadow-card">
            <h1 className="text-cocoa text-2xl md:text-5xl text-center">Community Care Initiative</h1>
            <p className="mt-4 text-char/90 max-w-prose font-helvetica font-light italic text-center mx-auto text-[17px]">
              Supporting families through accessible resources and community connection.
            </p>
          </div>
          
          <div className="card p-6 md:p-8">
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <div className="w-full h-48 md:h-full md:aspect-square mb-4 md:mb-0 md:order-2">
                <Image 
                  src="/images/Fill-the-Truck-Baby-Product-Drive-scaled-e1618515557627.jpg" 
                  alt="Community baby product drive - free baby and postpartum essentials for families in need" 
                  className="w-full h-full object-cover rounded-brand"
                  width={800}
                  height={600}
                />
              </div>
              <div className="md:order-1">
                <h3 className="text-forest text-2xl font-quicksand font-black">Free Baby & Postpartum Essentials</h3>
                <p className="mt-4 text-char/90 font-quicksand">
                  Every family deserves access to essential items during the postpartum period. Through community partnerships and donations, we provide free baby and postpartum care packages to families in need.
                </p>
                <ul className="mt-4 list-disc pl-5 text-char/90 space-y-1 font-quicksand">
                  <li>Newborn diapers and wipes</li>
                  <li>Postpartum recovery essentials</li>
                  <li>Baby care basics (onesies, blankets, etc.)</li>
                  <li>Breastfeeding support items</li>
                  <li>Comfort items for new parents</li>
                </ul>
                <p className="mt-4 text-char/90 font-quicksand">
                  <strong>How to access:</strong> Contact us to discuss your needs. All requests are handled with complete confidentiality and respect.
                </p>
                <div className="mt-4">
                  <ContactButton />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-cocoa text-2xl mb-4">Want to Support Our Community Initiative?</h3>
            <p className="text-char/90 mb-6 font-quicksand max-w-prose mx-auto">
              We're always looking for community partners, donors, and volunteers who share our mission of supporting all families. Whether you'd like to donate items, volunteer time, or partner with us, we'd love to hear from you.
            </p>
            <div className="mt-4">
              <ContactButton />
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
                className="btn bg-forest text-white shadow-card hover:opacity-90 active:translate-y-[1px] ml-3"
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-bark">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-white text-4xl">Contact</h1>
          <div className="card p-8 mt-6 text-center">
            <p className="text-char/90 mb-4 font-quicksand text-sm md:text-base">
              Email: <a className="underline text-cocoa hover:opacity-80" href="mailto:hello@rootedlactationed.com">hello@rootedlactationed.com</a>
            </p>
            <p className="text-char/90 font-quicksand text-sm md:text-base">
              Phone: <a className="underline text-cocoa hover:opacity-80" href="tel:240-715-2292">240-715-2292</a>
            </p>
            <p className="text-char/90 mt-4 mb-4 font-quicksand text-sm md:text-base">
              Social Media Handle: @rootedlactioned
            </p>
            <div className="flex gap-4 justify-center">
              <a href="https://instagram.com/rootedlactioned" target="_blank" rel="noopener noreferrer" className="text-cocoa hover:text-honey transition">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com/rootedlactioned" target="_blank" rel="noopener noreferrer" className="text-cocoa hover:text-honey transition">
                <Facebook size={24} />
              </a>
              <a href="https://youtube.com/@rootedlactioned" target="_blank" rel="noopener noreferrer" className="text-cocoa hover:text-honey transition">
                <Youtube size={24} />
              </a>
              <a href="https://tiktok.com/@rootedlactioned" target="_blank" rel="noopener noreferrer" className="text-cocoa hover:text-honey transition">
                <Music size={24} />
              </a>
              <a href="https://twitter.com/rootedlactioned" target="_blank" rel="noopener noreferrer" className="text-cocoa hover:text-honey transition">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Contact Button Component that uses the global modal
function ContactButton() {
  const handleClick = () => {
    // Dispatch a custom event to trigger the modal
    window.dispatchEvent(new CustomEvent('openContactModal'));
  };

  return (
    <button onClick={handleClick} className="btn btn-primary">
      Contact Us
    </button>
  );
}