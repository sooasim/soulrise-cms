export default ({ env }) => ({
    auth: {
        secret: env('ADMIN_JWT_SECRET', '245b1c440040599c6027f8ebd33e1c3de1749b77a8d0339176964aa4b24d30c40ade47cf6d58ce5f644760889f842f92217454bbe6d702a3eff5687f62d618c5'),
    },
    apiToken: {
        salt: env('API_TOKEN_SALT', 'b7a8854c3b7c5378d517d4554e60cd9c97322927cf5d009136b4a616ae5a99f8abb96fa311d69e4d0a4021fb23a8e33cf26a8aae31ac1ffd70c74569f850f427'),
    },
    transfer: {
        token: {
            salt: env('TRANSFER_TOKEN_SALT', '33691fc733e0a4f5f27d116a98c0dbe37a3699b2297db83c51683037f09f2f0bc3782e9db24e4ddb74e5dbc2d201f7d9e090f2e179881175328a6d6c78d15d49'),
        },
    },
    secrets: {
        encryptionKey: env('ENCRYPTION_KEY', 'a7f96ec7a64534585e650fbdf4314375cc87bbf8157c3ec3d3e836aa534e6e2baba6f978bd37e20a5268b115dbec72dbc17f59e315b02c45fab3ee3af59c189d'),
    },
    flags: {
        nps: env.bool('FLAG_NPS', true),
        promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
});
