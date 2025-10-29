import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Log the contact form submission (in production, this would send an email)
      console.log("Contact form submission received:", {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        message: validatedData.message,
        timestamp: new Date().toISOString(),
      });

      // In a production environment, you would:
      // 1. Send an email notification to the business
      // 2. Store the inquiry in a database
      // 3. Send a confirmation email to the customer
      // 4. Integrate with a CRM system

      res.json({
        success: true,
        message: "Your message has been received. We'll get back to you soon!",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors,
        });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your request",
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
