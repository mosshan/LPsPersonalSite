const int buttonPin2 = 2;
const int buttonPin3 = 3;    
const int servoPin =  9;

// variables will change:
int button2State = 0;         // variable for reading the pushbutton status
int button3State = 0;         // variable for reading the pushbutton status

#include <Servo.h>
Servo myservo;  
int pos = 0;  

void setup() {
myservo.attach(9);
pinMode(buttonPin2, INPUT);
pinMode(buttonPin3, INPUT);
}

void loop() {
// read the state of the pushbutton value:
button2State = digitalRead(buttonPin2);
button3State = digitalRead(buttonPin3);

if (button2State == LOW) {
// turn servo on:

for (pos = 0; pos <= 45; pos += 1) {

myservo.write(pos);              
delay(40);                      
}
for (pos = 45; pos >= 0; pos -= 1) {
myservo.write(pos);              
delay(40);                      
}

} else {
// turn LED off:
myservo.write(0);
}

// read the state of the pushbutton value:
button2State = digitalRead(buttonPin2);
button3State = digitalRead(buttonPin3);

if (button3State == LOW) {
// turn servo on:

for (pos = 0; pos <= 45; pos += 1) {

myservo.write(pos);              
delay(15);                      
}
for (pos = 45; pos >= 0; pos -= 1) {
myservo.write(pos);              
delay(15);                      
}
} else {
// turn LED off:
myservo.write(0);
}
}