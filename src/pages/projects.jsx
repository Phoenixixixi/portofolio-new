import { Check } from 'lucide-react'
import ProjectBlock from '@/components/project-block'
export default function Projects() {
  return (
    <div
      className="w-full h-full px-4 md:px-8 xl:px-18 py-32 pb-4"
      id="Projects"
    >
      <div className="flex justify-between">
        <h2 className="text-white text-2xl md:text-6xl font-bold">
          My Completed <br /> Projects
        </h2>
        <SuccessComponents />
      </div>
      <div className="grid md:grid-cols-2 mt-12 gap-18">
        <ProjectBlock
          status={false}
          title={'Maintenance Website KCIC'}
          src={'kcic.webp'}
        >
          IT Maintenance Kick adalah sistem pencatatan dan pelaporan digital
          untuk memonitor, mendokumentasikan, serta mengelola kerusakan
          perangkat IT di PT Kereta Cepat Indonesia China (KCIC).
        </ProjectBlock>
        <ProjectBlock
          status={true}
          title={'MindsetNgedit IPB University'}
          src={'Affinity.webp'}
          link={'https://mindsetngedit.com'}
        >
          MindsetNgedit adalah creative & digital partner yang membantu brand,
          kampus, komunitas, dan UMKM tampil lebih rapi, modern, dan profesional
          di dunia online.
        </ProjectBlock>
      </div>
    </div>
  )
}

function SuccessComponents() {
  return (
    <div className="bg-white px-2 py-2 rounded-full flex items-center  h-full">
      <div className="bg-lime-400 rounded-full p-1">
        <Check />
      </div>
      <p className="ml-6 mr-2">Success</p>
    </div>
  )
}
