import lab from '@/assets/institute-lab.jpeg.asset.json';
import tour from '@/assets/institute-tour.mp4.asset.json';
import classroom from '@/assets/classroom-session.jpg.asset.json';
import smartboard from '@/assets/smartboard-session.jpg.asset.json';
import lounge from '@/assets/institute-lounge.jpg.asset.json';
import panorama from '@/assets/lab-panorama.jpg.asset.json';
import reception from '@/assets/reception.jpg.asset.json';
import team from '@/assets/team-together.jpg.asset.json';
import loungeVideo from '@/assets/institute-lounge.mp4.asset.json';
import labVideo from '@/assets/lab-panorama.mp4.asset.json';
import receptionVideo from '@/assets/reception.mp4.asset.json';
import teamVideo from '@/assets/team-together.mp4.asset.json';
import discussion from '@/assets/classroom-discussion.jpg.asset.json';
import group from '@/assets/group-learning.jpg.asset.json';
import corridor from '@/assets/campus-corridor.jpg.asset.json';
export const instituteMedia = { discussion: discussion.url, group: group.url, corridor: corridor.url, lab: lab.url, classroom: classroom.url, smartboard: smartboard.url, tour: tour.url, hero: panorama.url, story: reception.url, lounge: lounge.url, team: team.url, heroVideo: labVideo.url };
export const instituteClips = [
  { src: loungeVideo.url, poster: lounge.url, title: 'Inside the institute' },
  { src: labVideo.url, poster: panorama.url, title: 'Our cybersecurity workspace' },
  { src: receptionVideo.url, poster: reception.url, title: 'Welcome to eSecurityIN' },
  { src: teamVideo.url, poster: team.url, title: 'Together at eSecurityIN' },
];
export const galleryItems = [
  { src: lab.url, title: 'Inside the cybersecurity lab', category: 'Computer labs' },
  { src: classroom.url, title: 'Learning together at eSecurityIN', category: 'Classroom sessions' },
  { src: smartboard.url, title: 'Instructor-led practical learning', category: 'Classroom sessions' },
  { src: panorama.url, title: 'Our cybersecurity workspace', category: 'Computer labs' },
  { src: reception.url, title: 'Welcome to eSecurityIN', category: 'Institute spaces' },
  { src: lounge.url, title: 'A space to connect and collaborate', category: 'Institute spaces' },
  { src: team.url, title: 'Together at eSecurityIN', category: 'Our team' },
  { src: discussion.url, title: 'Classroom discussion', category: 'Classroom sessions' },
  { src: group.url, title: 'Group learning at the institute', category: 'Classroom sessions' },
  { src: corridor.url, title: 'Around our campus', category: 'Institute spaces' },
];
