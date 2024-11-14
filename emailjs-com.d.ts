declare module 'emailjs-com' {
  export interface SendResponse {
    status: number;
    text: string;
  }

  export function send(service_id: string, template_id: string, template_params: unknown, user_id?: string): Promise<SendResponse>;
}
