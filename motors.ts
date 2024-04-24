/**
 * Blocks for driving the Kitronik Motor Driver Board
 */
//% weight=100 color=#00A654 icon="\uf21c" block="Blinkit"
namespace kitronik_motor_driver {
	/************************************************************************************************************************************************
	* micro:bit motor driver blocks 
	************************************************************************************************************************************************/
    /*Note that Forward and reverse are slightly arbitrary, as it depends on how the motor is wired...*/
    
    
    /**
     * BLINKIT initialize
     */
    //% blockId="BLINKIT_I2C_init" block="初始化BLINKIT"
    //% weight=100 blockGap=8
    //% parts=BLINKIT_I2C trackArgs=0
    export function init() {
        serial.redirect(
            SerialPin.P8,
            SerialPin.P12,
            BaudRate.BaudRate9600
        )
    }
    
    
    
    
    
    export enum MotorDirection {
        //% block="forward"
        Forward,
        //% block="reverse"
        Reverse
    }

    export enum Led8x8 {
        //%blockId=kitronik_motordriver_motor_one
        //% block="1"
        Led8x81,
        //%blockId=kitronik_motordriver_motor_two
        //% block="2"
        Led8x82,
        //%blockId=kitronik_motordriver_motor_two
        //% block="3"
        Led8x83,
        //%blockId=kitronik_motordriver_motor_two
        //% block="4"
        Led8x84,
        //%blockId=kitronik_motordriver_motor_two
        //% block="5"
        Led8x85,
        //%blockId=kitronik_motordriver_motor_two
        //% block="6"
        Led8x86,
        //%blockId=kitronik_motordriver_motor_two
        //% block="7"
        Led8x87,
        //%blockId=kitronik_motordriver_motor_two
        //% block="8"
        Led8x88,
        //%blockId=kitronik_motordriver_motor_two
        //% block="9"
        Led8x89,
    }


	/**
     * Turns on motor specified by eMotors in the direction specified
     * by eDirection, at the requested speed 
     *
	 * @param motor which motor to turn on
	 * @param dir   which direction to go
	 * @param speed how fast to spin the motor
     */
    //% blockId=kitronik_motordriver_motor_on
    //% block="8x8,位置%motor|动画%dir|速度 %speed"
    //% speed.min=0 speed.max=100
    export function motorOn(motor: Led8x8, dir: MotorDirection, speed: number): void {
        /*first convert 0-100 to 0-1024 (approx) We wont worry about the lsat 24 to make life simpler*/
        let OutputVal = Math.clamp(0, 100, speed) * 10;

        let PosNum: number = Led8x8.Led8x81; // directionInt 现在是数字 1
        

        switch (motor) {
            case Led8x8.Led8x81:

                break;
            case Led8x8.Led8x82:

                break;
        }
    }
}