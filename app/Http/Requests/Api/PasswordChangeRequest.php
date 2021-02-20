<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class PasswordChangeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'old_password' => 'required',
            'new_password' => 'confirmed|different:old_password',
        ];
    }
    public function attributes()
    {
        return [
            'old_password' => 'Eski Şifre',
            'new_password' => 'Yeni Şifre',
        ];
    }
}
