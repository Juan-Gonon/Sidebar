import { AiOutlineHome, AiOutlineApartment } from 'react-icons/ai'
import { MdOutlineAnalytics } from 'react-icons/md'

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
  }

]
