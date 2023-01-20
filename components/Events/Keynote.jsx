import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Image from 'next/image';
import style from '../../styles/fourth.module.css';

const speakers = [
  {
    name: 'BVR Mohan Reddy',
    designation: 'Founder Chairman & Board Member',
    company: 'Cyient',
    imgUrl: '/mohan_reddy.jpeg',
  },
  {
    name: 'Rama Iyer',
    designation: 'Head of Innovation',
    company: 'GMR Group',
    imgUrl: '/keynote speakers/Rama Iyer.jpeg',
  },
  {
    name: 'Udaya Kumar Dintyala',
    designation: 'Ex Exec. Director',
    company: 'AT&T Global Business Services India',
    imgUrl: '/keynote speakers/Udaya Kumar.jpg',
  },
  {
    name: 'Dr. Ravishankar Polisetty',
    designation: 'MD, CEO, Director R&D',
    company: 'Sai Ganga Panakeia Pvt. Ltd',
    imgUrl: '/keynote speakers/Dr. Ravishankar Polisetty.jpeg',
  },
  {
    name: 'Sandip Poddar',
    designation: 'Co-Founder and Director',
    company: 'Navikarna Ventures',
    imgUrl: '/keynote speakers/Sandip Poddar.jpg',
  },
  {
    name: 'Avishek Gupta',
    designation: 'Managing Director & CEO',
    company: 'Caspian Debt',
    imgUrl: '/keynote speakers/Avishek Gupta.jpg',
  },
  {
    name: 'Dr. Shanta Thoutam',
    designation: 'Chief Innovation Officer',
    company: 'Government of Telangana',
    imgUrl: '/keynote speakers/Dr. Shanta Thoutam.jpg',
  },
  {
    name: 'GV Krishnagopal',
    designation: 'Group CEO',
    company: 'Access Livelihoods Group',
    imgUrl: '/keynote speakers/GV Krishnagopal.jpg',
  },
  // {
  //   name: "Sri Charan Lakkaraju",
  //   designation: "",
  //   company: "",
  //   imgUrl:
  //     "/keynote speakers/",
  // },
];

function Card({ name, imgUrl, designation = '', company = '' }) {
  return (
    <div className="p-2 flex flex-col items-center">
      <div className="h-[13.75rem] w-[13rem] relative bg-white rounded-xl overflow-hidden">
        <Image src={imgUrl} layout="fill" objectFit="cover" alt={name} />
      </div>
      <div className="mt-4">
        <h3 className="text-white text-2xl text-center">{name}</h3>
        <h3 className="text-offwhite text-lg text-center pt-2 leading-6">
          {designation}
        </h3>
        <h3 className="text-md text-center pt-1 text-offwhite">{company}</h3>
      </div>
    </div>
  );
}

export default function Keynote() {
  return (
    <div>
      <h2 className="text-center font-medium text-5xl text-blue">
        KEYNOTE SPEAKERS
      </h2>
      <div className="my-7 ">
        <div className="infinite flex gap-5 w-fit">
          {' '}
          {speakers.map((speaker, index) => (
            <Card
              key={speaker.name}
              name={speaker.name}
              imgUrl={speaker.imgUrl}
              designation={speaker?.designation}
              company={speaker?.company}
            />
          ))}
          {speakers.map((speaker, index) => (
            <Card
              key={speaker.name + index}
              name={speaker.name}
              imgUrl={speaker.imgUrl}
              designation={speaker?.designation}
              company={speaker?.company}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
