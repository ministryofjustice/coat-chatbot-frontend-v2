resource "auth0_client" "auth0_actions_management_client" {
  allowed_clients                                      = []
  allowed_logout_urls                                  = []
  allowed_origins                                      = []
  app_type                                             = "non_interactive"
  async_approval_notification_channels                 = []
  callbacks                                            = []
  client_aliases                                       = []
  client_metadata                                      = {}
  compliance_level                                     = null
  cross_origin_auth                                    = false
  cross_origin_loc                                     = null
  custom_login_page                                    = null
  custom_login_page_on                                 = true
  description                                          = null
  encryption_key                                       = null
  form_template                                        = null
  grant_types                                          = ["client_credentials"]
  initiate_login_uri                                   = null
  is_first_party                                       = true
  is_token_endpoint_ip_header_trusted                  = false
  logo_uri                                             = null
  name                                                 = "Auth0-Actions-Management-Client"
  oidc_conformant                                      = true
  organization_discovery_methods                       = []
  organization_require_behavior                        = null
  organization_usage                                   = null
  redirection_policy                                   = null
  require_proof_of_possession                          = false
  require_pushed_authorization_requests                = false
  resource_server_identifier                           = null
  skip_non_verifiable_callback_uri_confirmation_prompt = "null"
  sso                                                  = false
  sso_disabled                                         = false
  third_party_security_mode                            = null
  web_origins                                          = []
  default_organization {
    disable         = true
    flows           = []
    organization_id = null
  }
  jwt_configuration {
    alg                 = "RS256"
    lifetime_in_seconds = 36000
    scopes              = {}
    secret_encoded      = false
  }
  refresh_token {
    expiration_type              = "non-expiring"
    idle_token_lifetime          = 2592000
    infinite_idle_token_lifetime = true
    infinite_token_lifetime      = true
    leeway                       = 0
    rotation_type                = "non-rotating"
    token_lifetime               = 31557600
  }
}

resource "auth0_client_credentials" "auth0_actions_management_client" {
  authentication_method    = "client_secret_post"
  client_id                = auth0_client.auth0_actions_management_client.client_id
}

resource "auth0_client_grant" "auth0_actions_management_client_grant" {
  allow_all_scopes            = false
  allow_any_organization      = false
  audience                    = "https://${var.auth0_domain}/api/v2/"
  authorization_details_types = []
  client_id                   = auth0_client.auth0_actions_management_client.client_id
  default_for                 = null
  organization_usage          = null
  scopes                      = ["read:users", "update:users", "read:user_idp_tokens"]
  subject_type                = "client"
}

resource "auth0_client" "coat_chatbot_frontend" {
  allowed_clients                                      = []
  allowed_logout_urls                                  = var.environment == "development" ? ["https://${var.webapp_domain}/", "https://localhost:4567/"] : ["https://${var.webapp_domain}/"]
  allowed_origins                                      = []
  app_type                                             = "regular_web"
  async_approval_notification_channels                 = []
  callbacks                                            = var.environment == "development" ? ["https://localhost:4567/auth/callback", "https://${var.webapp_domain}/auth/callback"] : ["https://${var.webapp_domain}/auth/callback"]
  client_aliases                                       = []
  client_metadata                                      = {}
  compliance_level                                     = null
  cross_origin_auth                                    = false
  cross_origin_loc                                     = null
  custom_login_page                                    = null
  custom_login_page_on                                 = true
  description                                          = null
  encryption_key                                       = null
  form_template                                        = null
  grant_types                                          = ["authorization_code", "implicit", "refresh_token", "client_credentials"]
  initiate_login_uri                                   = null
  is_first_party                                       = true
  is_token_endpoint_ip_header_trusted                  = false
  logo_uri                                             = null
  name                                                 = "COAT Chatbot Frontend"
  oidc_conformant                                      = true
  organization_discovery_methods                       = []
  organization_require_behavior                        = null
  organization_usage                                   = null
  redirection_policy                                   = null
  require_proof_of_possession                          = false
  require_pushed_authorization_requests                = false
  resource_server_identifier                           = null
  skip_non_verifiable_callback_uri_confirmation_prompt = "null"
  sso                                                  = true
  sso_disabled                                         = false
  third_party_security_mode                            = null
  web_origins                                          = var.environment == "development" ? ["https://${var.webapp_domain}", "https://localhost:4567"] : ["https://${var.webapp_domain}"]
  default_organization {
    disable         = true
    flows           = []
    organization_id = null
  }
  jwt_configuration {
    alg                 = "RS256"
    lifetime_in_seconds = 36000
    scopes              = {}
    secret_encoded      = false
  }
  native_social_login {
    apple {
      enabled = false
    }
    facebook {
      enabled = false
    }
    google {
      enabled = false
    }
  }
  refresh_token {
    expiration_type              = "non-expiring"
    idle_token_lifetime          = 2592000
    infinite_idle_token_lifetime = true
    infinite_token_lifetime      = true
    leeway                       = 0
    rotation_type                = "non-rotating"
    token_lifetime               = 31557600
  }
}

resource "auth0_client_credentials" "coat_chatbot_frontend" {
  authentication_method    = "client_secret_post"
  client_id                = auth0_client.coat_chatbot_frontend.client_id
}