import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Home, BookOpen, Briefcase, Users, Activity, 
  Lightbulb, Award, Scale, FileText, GraduationCap, 
  Phone, BarChart, Megaphone 
} from "lucide-react"
import Link from "next/link"

export default function CMSPage() {
  const pages = [
    { id: "homepage", title: "Homepage", description: "Manage carousel slides, announcements, and quick links.", icon: <Home className="h-6 w-6 text-[#003399]" />, link: "/cms/homepage" },
    { id: "courses", title: "Courses", description: "Manage academic programs, subjects, and curriculum.", icon: <BookOpen className="h-6 w-6 text-[#003399]" />, link: "/cms/courses" },
    { id: "placement", title: "Placement", description: "Manage placement records, recruiters, and drives.", icon: <Briefcase className="h-6 w-6 text-[#003399]" />, link: "/cms/placement" },
    { id: "student-support", title: "Student Support", description: "Manage scholarships, anti-ragging, and grievances.", icon: <Users className="h-6 w-6 text-[#003399]" />, link: "/cms/student-support" },
    { id: "activities", title: "Activities", description: "Manage NSS, NCC, sports, and cultural events.", icon: <Activity className="h-6 w-6 text-[#003399]" />, link: "/cms/activities" },
    { id: "research", title: "Research", description: "Manage publications, projects, and research policies.", icon: <Lightbulb className="h-6 w-6 text-[#003399]" />, link: "/cms/research" },
    { id: "naac-iqac", title: "NAAC & IQAC", description: "Manage accreditation data, IQAC reports, and AQAR.", icon: <Award className="h-6 w-6 text-[#003399]" />, link: "/cms/naac-iqac" },
    { id: "statutory", title: "Statutory", description: "Manage mandatory disclosures and statutory committees.", icon: <Scale className="h-6 w-6 text-[#003399]" />, link: "/cms/statutory" },
    { id: "examination", title: "Examination", description: "Manage exam schedules, results, and notices.", icon: <FileText className="h-6 w-6 text-[#003399]" />, link: "/cms/examination" },
    { id: "alumni", title: "Alumni", description: "Manage alumni network, registration, and events.", icon: <GraduationCap className="h-6 w-6 text-[#003399]" />, link: "/cms/alumni" },
    { id: "contacts", title: "Contacts", description: "Manage campus directories and contact information.", icon: <Phone className="h-6 w-6 text-[#003399]" />, link: "/cms/contacts" },
    { id: "nirf", title: "NIRF", description: "Manage National Institutional Ranking Framework data.", icon: <BarChart className="h-6 w-6 text-[#003399]" />, link: "/cms/nirf" },
    { id: "notices", title: "Notices", description: "Manage global announcements and latest news.", icon: <Megaphone className="h-6 w-6 text-[#003399]" />, link: "/notices" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#111]">CMS / Website Pages</h2>
          <p className="text-[#555] mt-2">Select a section below to manage its content on the public frontend.</p>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
        {pages.map((page) => (
          <Card key={page.id} className="bg-white border-[#ddd] shadow-sm flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
              <div className="p-3 bg-[#f5f5f5] border border-[#ddd] rounded-md text-[#003399]">
                {page.icon}
              </div>
              <div className="flex-1 space-y-1">
                <CardTitle className="text-[#111]">{page.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col pt-4">
              <CardDescription className="text-sm text-[#555] mb-4 flex-1">
                {page.description}
              </CardDescription>
              <Link href={page.link} className="w-full mt-auto">
                <Button variant="outline" className="w-full bg-[#f5f5f5] hover:bg-[#003399] hover:text-white border-[#ddd] text-[#111] transition-colors">
                  Manage {page.title}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
