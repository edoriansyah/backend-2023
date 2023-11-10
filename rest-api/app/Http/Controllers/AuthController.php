<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        # menangkap inputan
        $input = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ];

        # membuat user baru
        $user = User::create($input);

        $data = [
            'message' => 'User is created successfully',
        ];

        return response()->json($data, 200);
    }

    public function login(Request $request)
    {
        # menangkap inputan
        $input = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        # mengambil data user (DB)
        $user = User::where('email', $input['email'])->first();

        # membandingkan user dgn data user (DB)
        $isLoginSuccessfully = ($input['email'] == $user->email && Hash::check($input['password'], $user->password));

        if ($isLoginSuccessfully) {
            # membuat token
            $token = $user->createToken('auth_token');

            $data = [
                'message' => 'User is logged in successfully',
                'token' => $token->plainTextToken,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Email or password is wrong',
            ];

            return response()->json($data, 401);
        }

    }
}
