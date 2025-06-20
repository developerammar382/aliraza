import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mpwrrngw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6 w-full max-w-md mx-auto glass-morphism p-8 rounded-xl"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <motion.div
          animate={errors.name ? { x: [0, -10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          <Input
            id="name"
            className={`bg-secondary/50 border-0 focus-visible:ring-primary ${errors.name ? 'border-destructive' : ''}`}
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-destructive text-xs mt-1">{errors.name}</p>
          )}
        </motion.div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <motion.div
          animate={errors.email ? { x: [0, -10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          <Input
            id="email"
            className={`bg-secondary/50 border-0 focus-visible:ring-primary ${errors.email ? 'border-destructive' : ''}`}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-destructive text-xs mt-1">{errors.email}</p>
          )}
        </motion.div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <motion.div
          animate={errors.message ? { x: [0, -10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          <Textarea
            id="message"
            className={`bg-secondary/50 border-0 focus-visible:ring-primary ${errors.message ? 'border-destructive' : ''}`}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows={5}
          />
          {errors.message && (
            <p className="text-destructive text-xs mt-1">{errors.message}</p>
          )}
        </motion.div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>
    </motion.form>
  );
};

export default ContactForm;