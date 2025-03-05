import { VideoCard } from "./VideoCard"

const VEDIOS = [{
    src: "/bewajah.jpg",
    title: "Bewajah [Hindi] | Kasam teri kasam",
    channel: "T Series",
    views: "45M",
    days: 10,
}, {
    src: "/satyabhama.jpg",
    title: "Satyabhama Teaser[Hindi]| Kajal Aggarwal | Sashi Kiran Tikka | Akhil Degala",
    channel: "Prime Vedio India",
    views: "36M",
    days: 10
},{
    src: "/bewajah.jpg",
    title: "Bewajah [Hindi] | Kasam teri kasam",
    channel: "T Series",
    views: "45M",
    days: 10,
}, {
    src: "/satyabhama.jpg",
    title: "Satyabhama Teaser[Hindi]| Kajal Aggarwal | Sashi Kiran Tikka | Akhil Degala",
    channel: "Prime Vedio India",
    views: "36M",
    days: 10
},{
    src: "/bewajah.jpg",
    title: "Bewajah [Hindi] | Kasam teri kasam",
    channel: "T Series",
    views: "45M",
    days: 10,
}, {
    src: "/satyabhama.jpg",
    title: "Satyabhama Teaser[Hindi]| Kajal Aggarwal | Sashi Kiran Tikka | Akhil Degala",
    channel: "Prime Vedio India",
    views: "36M",
    days: 10
},{
    src: "/bewajah.jpg",
    title: "Bewajah [Hindi] | Kasam teri kasam",
    channel: "T Series",
    views: "45M",
    days: 10,
}, {
    src: "/satyabhama.jpg",
    title: "Satyabhama Teaser[Hindi]| Kajal Aggarwal | Sashi Kiran Tikka | Akhil Degala",
    channel: "Prime Vedio India",
    views: "36M",
    days: 10
},{
    src: "/bewajah.jpg",
    title: "Bewajah [Hindi] | Kasam teri kasam",
    channel: "T Series",
    views: "45M",
    days: 10,
}, {
    src: "/satyabhama.jpg",
    title: "Satyabhama Teaser[Hindi]| Kajal Aggarwal | Sashi Kiran Tikka | Akhil Degala",
    channel: "Prime Vedio India",
    views: "36M",
    days: 10
}]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VEDIOS.map(video => <div>
        <VideoCard
          src= {video.src}
          title={video.title}
          channel={video.channel}
          views={video.views}
          days={video.days}></VideoCard>
          </div>
)}
    </div>
}