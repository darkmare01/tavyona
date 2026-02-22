// data/roboticsProducts.ts
export type RoboticsProduct = {
  id: string;
  title: string;
  slug: string;
  category: string; // e.g. "fpv-drones", "boards-sensors"
  price: number;
  image: string;
};

export const roboticsProducts: RoboticsProduct[] = [
  { id: "1", title: "5-inch FPV Frame", slug: "5-inch-fpv-frame", category: "fpv-drones", price: 1999, image: "/img/p1.jpg" },
  { id: "2", title: "2207 Brushless Motor", slug: "2207-brushless-motor", category: "motors-servos", price: 1299, image: "/img/p2.jpg" },
  { id: "3", title: "F405 Flight Controller", slug: "f405-flight-controller", category: "controllers-esc", price: 2499, image: "/img/p3.jpg" },
  { id: "4", title: "30A ESC", slug: "30a-esc", category: "controllers-esc", price: 1499, image: "/img/p4.jpg" },
  { id: "5", title: "FPV Camera", slug: "fpv-camera", category: "cameras-fpv-gear", price: 999, image: "/img/p5.jpg" },
  { id: "6", title: "5.8GHz VTX", slug: "58ghz-vtx", category: "cameras-fpv-gear", price: 1199, image: "/img/p6.jpg" },
  { id: "7", title: "RC Plane Kit", slug: "rc-plane-kit", category: "rc-planes", price: 3499, image: "/img/p7.jpg" },
  { id: "8", title: "9g Servo", slug: "9g-servo", category: "motors-servos", price: 199, image: "/img/p8.jpg" },
  { id: "9", title: "ESP32 Dev Board", slug: "esp32-dev-board", category: "boards-sensors", price: 499, image: "/img/p9.jpg" },
  { id: "10", title: "MPU6050 Gyro", slug: "mpu6050-gyro", category: "boards-sensors", price: 149, image: "/img/p10.jpg" },

  { id: "11", title: "Carbon Fiber Arms", slug: "carbon-fiber-arms", category: "frames-mechanics", price: 899, image: "/img/p11.jpg" },
  { id: "12", title: "3D Printed Mount", slug: "3d-printed-mount", category: "frames-mechanics", price: 299, image: "/img/p12.jpg" },
  { id: "13", title: "XT60 Connectors", slug: "xt60-connectors", category: "wires-connectors", price: 199, image: "/img/p13.jpg" },
  { id: "14", title: "Silicone Wires Set", slug: "silicone-wires-set", category: "wires-connectors", price: 249, image: "/img/p14.jpg" },
  { id: "15", title: "DIY Drone Kit", slug: "diy-drone-kit", category: "diy-kits-combos", price: 5999, image: "/img/p15.jpg" },
  { id: "16", title: "RC Plane Combo", slug: "rc-plane-combo", category: "diy-kits-combos", price: 4499, image: "/img/p16.jpg" },
  { id: "17", title: "LiPo 3S 2200mAh", slug: "lipo-3s-2200mah", category: "fpv-drones", price: 1899, image: "/img/p17.jpg" },
  { id: "18", title: "Propeller Set", slug: "propeller-set", category: "fpv-drones", price: 299, image: "/img/p18.jpg" },
  { id: "19", title: "GPS Module", slug: "gps-module", category: "boards-sensors", price: 899, image: "/img/p19.jpg" },
  { id: "20", title: "Power Distribution Board", slug: "power-distribution-board", category: "boards-sensors", price: 349, image: "/img/p20.jpg" },
];