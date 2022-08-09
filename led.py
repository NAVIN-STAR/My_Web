import paho.mqtt.client as mqtt
import time
import RPi.GPIO as GPIO

#setmode
GPIO.setmode(GPIO.BCM)

#pin_setup for led.

GPIO.setup(4,GPIO.OUT)




def on_message(client, userdata, message):
	msg = str(message.payload.decode("utf-8"))
	if(msg == "on" or msg=="ON" or msg=="On"):
		GPIO.output(4, GPIO.HIGH)
	elif(msg == "off" or msg=="OFF" or msg=="Off"):
		GPIO.output(4, GPIO.LOW)
	print("received message: " ,str(message.payload.decode("utf-8")))

mqttBroker ="broker.hivemq.com"

client = mqtt.Client("internet")
client.connect(mqttBroker) 
#Loop_Start
client.loop_start()

client.subscribe("internet")
client.on_message=on_message 

time.sleep(90000)
#Loop_End
client.loop_stop()
