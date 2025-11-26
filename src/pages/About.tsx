import History from "../components/About/History";
import Maps from "../components/About/Maps";
import VisionMission from "../components/About/VisionMission";
import About from "../components/Home/About";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Ini Tentang Perusahaan Kami"
        description="Pelajari lebih lanjut tentang sejarah, visi, dan misi kami. Kami berkomitmen untuk memberikan yang terbaik bagi pelanggan kami."
      />
      <History />
      <VisionMission />
      <Maps />
    </>
  );
}
