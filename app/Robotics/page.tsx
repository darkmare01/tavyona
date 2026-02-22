import RoboticsHero from "@/components/Robotics/roboticsHero";
import RoboticsCategories from "@/components/Robotics/roboticsCategories";
import RoboticsFeatured from "@/components/Robotics/roboticsFeature";
import RoboticsWhy from "@/components/Robotics/roboticsWhy";
import RoboticsCTA from "@/components/Robotics/roboticsCTA";

export default function RoboticsPage() {
  return (
    <main>
      <RoboticsHero />
      <RoboticsCategories />
      <RoboticsFeatured />
      <RoboticsWhy />
      <RoboticsCTA />
    </main>
  );
}
