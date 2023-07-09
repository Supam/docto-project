import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/single_child_scroll_view.dart';
import 'login/my_button.dart';
import 'login/squareTile.dart';
import 'login/patientloginpage.dart';
import 'login/doctorloginpage.dart';

class Menu extends StatelessWidget {
  Menu({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // logo
            const SizedBox(height: 50),
            Image.asset(
              "lib/images/sigle.png",
              height: 200,
              width: 200,
            ),
            const SizedBox(height: 30),

            // print welcoming message
            Text(
              'Welcome back to DocToRare !',
              style: TextStyle(
                color: Colors.grey[700],
                fontSize: 16,
              ),
            ),

            const SizedBox(height: 25),

            // sign in button
            MyButton(
              text: "Patient Profil",
              onTap: () {
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(builder: (context) => PatientLoginPage()),
                );
              },
            ),

            const SizedBox(height: 25),

            // sign in button
            MyButton(
              text: "Doctor Profil",
              onTap: () {
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(builder: (context) => DoctorLoginPage()),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}