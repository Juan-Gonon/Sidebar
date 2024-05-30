import { AiOutlineHome, AiOutlineApartment } from 'react-icons/ai'
import { MdOutlineAnalytics } from 'react-icons/md'
import { TbReportSearch } from 'react-icons/tb'
import { LiaProjectDiagramSolid } from 'react-icons/lia'

export const linksArray = [
  {
    label: 'Home',
    icon: <AiOutlineHome />,
    to: '/'
  },
  {
    label: 'Estadisticas',
    icon: <MdOutlineAnalytics />,
    to: '/estadisticas'
  },
  {
    label: 'Productos',
    icon: <AiOutlineApartment />,
    to: '/productos'
  },
  {
    label: 'Diagramas',
    icon: <LiaProjectDiagramSolid />,
    to: '/productos'
  },
  {
    label: 'Reportes',
    icon: <TbReportSearch />,
    to: '/productos'
  }

]
