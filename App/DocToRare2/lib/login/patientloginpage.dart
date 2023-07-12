import 'dart:convert';
import 'dart:io';

import 'package:doctorare/varglo.dart';
import 'package:flutter/material.dart';
import 'my_button.dart';
import 'Textfield.dart';
import 'squareTile.dart';
import 'package:flutter/src/widgets/single_child_scroll_view.dart';
import 'package:doctorare/login/new_account.dart';
import 'package:doctorare/Patients_pages/homepage.dart';
import 'package:http/http.dart' as http;

class PatientLoginPage extends StatelessWidget {
  PatientLoginPage({super.key});

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
                // put any fct
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
              'Welcome back !',
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
              onTap: () async {
                var client = new http.Client();
                var key = null;
                int id = -1;
                Map data = {
                  "email": usernameController.text,
                  "password": passwordController.text
                };
                var body = json.encode(data);
                try{
                  //final reponse = await client.get(Uri.parse('http://10.0.2.2:3000/auth/profile'), headers: {HttpHeaders.authorizationHeader:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9uIiwiaWF0IjoxNjg4OTMyODM3LCJleHAiOjE2ODg5MzI4OTd9.D4bPT8xfN214wFZHFM5Fbc8hjFXLWXoGCXRLQq1VZkc'});
                  var reponse = await client.post(Uri.parse('http://10.0.2.2:3000/auth'), body: body, headers: {"Content-Type":"application/json"});
                  print(json.decode(reponse.body));
                  key = json.decode(reponse.body)["accessToken"];
                  id = json.decode(reponse.body)["id"];
                  //reponse = await client.get(Uri.parse('http://10.0.2.2:3000/auth/profile'), headers: {HttpHeaders.authorizationHeader:'Bearer '+json.decode(reponse.body)["accessToken"]});
                  //print(json.decode(reponse.body)["id"]);
                }
                finally{
                  client.close();
                }

                //print(usernameController.text);
                //print(passwordController.text);
                if (key != "") {
                  glo_accesstoken = key;
                  glo_id = id;
                  Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (context) => PatientView()),
                  );
                }
              }
            ),

            const SizedBox(height: 15),

            MyButton(
                onTap: () {
                  Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (context) => create_account()),
                  );
                },
                text: "New account"
            ),
          ],
        ),
      ),
    );
  }
}