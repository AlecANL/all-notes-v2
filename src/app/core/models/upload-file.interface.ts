export interface IUploadFileResponse {
  asset_id: string;
  bytes: number;
  created_at: string;
  etag: string;
  format: string;
  height: number;
  original_filename: string;
  placeholder: Boolean;
  public_id: string;
  resource_type: string;
  secure_url: string;
  signature: string;
  tag: string[];
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
}
