import 'package:flutter/material.dart';
import 'my_button.dart';
import 'Textfield.dart';
import 'squareTile.dart';
import 'package:flutter/src/widgets/single_child_scroll_view.dart';
import 'package:doctorare/menu.dart';

class DoctorLoginPage extends StatelessWidget {
  DoctorLoginPage({super.key});

  // text editing controllers
  final usernameController = TextEditingController();
  final passwordController = TextEditingController();

  // sign user in method
  void signUserIn() {}

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
            GestureDetector(
              onTap: () {
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(builder: (context) => Menu()),
                );
              },
              child: Image.asset(
                "lib/images/sigle.png",
                height: 200,
                width: 200,
              ),
            ),
            const SizedBox(height: 30),

            // print welcoming message
            Text(
              'Welcome back Doctor !',
              style: TextStyle(
                color: Colors.grey[700],
                fontSize: 16,
              ),
            ),

            const SizedBox(height: 25),

            // username textfield
            MyTextField(
              controller: usernameController,
              hintText: 'Username',
              obscureText: false,
            ),

            const SizedBox(height: 10),

            // password textfield
            MyTextField(
              controller: passwordController,
              hintText: 'Password',
              obscureText: true,
            ),

            const SizedBox(height: 10),

            // forgot password?
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 25.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  Text(
                    'Forgot Password?',
                    style: TextStyle(color: Colors.grey[600]),
                  ),
                ],
              ),
            ),

            const SizedBox(height: 25),

            // sign in button
            MyButton(
                text: "Sign in",
                onTap: () {
                  print(usernameController.text);
                  print(passwordController.text);
                }
            ),
          ],
        ),
      ),
    );
  }
}