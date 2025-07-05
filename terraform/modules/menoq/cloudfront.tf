resource "aws_cloudfront_origin_access_identity" "menoq_bucket_access_identity" {
  comment = "Origin identity for ${local.name_prefix}"
}

resource "aws_cloudfront_distribution" "menoq_bucket_cloudfront" {
  origin {
    domain_name = aws_s3_bucket.menoq_bucket.bucket_regional_domain_name
    origin_id   = "${local.name_prefix}-origin"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.menoq_bucket_access_identity.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  wait_for_deployment = false

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "${local.name_prefix}-origin"
    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  custom_error_response {
    error_code         = 404
    response_page_path = "/index.html"
    response_code      = 200
  }

  tags = {
    environment = var.stage
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}