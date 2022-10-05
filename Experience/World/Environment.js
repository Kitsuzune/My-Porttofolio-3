import * as THREE from "three";
import { Scene } from "three";
import Experience from "../Experience.js";
import Sizes from "../Utils/Sizes.js";
import GSAP from "gsap";
import GUI from 'lil-gui';

export default class Environment {
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        // this.gui = new GUI();
        // this.obj = {
        //     colorObj: {r: 0 , g: 0 , b: 0},
        //     intensity: 3,
        // };

        this.setSunlight();
        this.setGUI();
    }

    setGUI(){

    }

    setSunlight(){
        this.sunLight = new THREE.DirectionalLight("#ffffff", 5);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set( 2048, 2048 );
        this.sunLight.shadow.normalBias = 0.05;
        // const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
        // this.scene.add(helper);
        this.sunLight.position.set( -1.5 , 7 , 3);
        this.scene.add(this.sunLight);

        this.ambientLight = new THREE.AmbientLight("#FFFFFF",1);
        this.scene.add(this.ambientLight);
    }

    switchTheme(theme){
        if (theme === "dark") {
            GSAP.to(this.sunLight.color, {
                r: 0.17254901960784313,
                g: 0.23137254901960785,
                b: 0.6862745098039216,
            });
            GSAP.to(this.ambientLight.color, {
                r: 0.17254901960784313,
                g: 0.23137254901960785,
                b: 0.6862745098039216,
            });
            GSAP.to(this.sunLight, {
                intensity: 2,
            });
            GSAP.to(this.ambientLight, {
                intensity: 2,
            });
        } else {
            GSAP.to(this.sunLight.color, {
                r: 255 / 255,
                g: 255 / 255,
                b: 255 / 255,
            });
            GSAP.to(this.ambientLight.color, {
                r: 255 / 255,
                g: 255 / 255,
                b: 255 / 255,
            });
            GSAP.to(this.sunLight, {
                intensity: 3,
            });
            GSAP.to(this.ambientLight, {
                intensity: 1,
            });
        }
    }

    resize(){
    }

    update(){
    }

}