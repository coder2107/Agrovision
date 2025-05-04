#define SensorPin A0
float calibration_value = 21.34; // Adjust based on sensor calibration

void setup() {
    Serial.begin(9600);
}

void loop() {
    int sensorValue = analogRead(SensorPin);
    float voltage = sensorValue * (5.0 / 1023.0);
    float pH = ((7 + ((2.5 - voltage) * calibration_value) ) * -1 + 6); // Basic pH calculation

    Serial.print("pH Value: ");
    Serial.println(pH);
    delay(1000);
}
