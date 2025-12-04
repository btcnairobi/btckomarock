import React from 'react';

export interface Merchant {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  acceptsLightning: boolean;
  location: string;
}

export interface Question {
  text: string;
  options: string[];
  correctIndex: number;
}

export interface SubTopic {
  title: string;
  content: string; // Markdown
  questions: Question[];
  tools: string[];
}

export interface StudySegment {
  id: string;
  title: string;
  description: string;
  subtopics: SubTopic[]; 
  socialCaption: string;
  certificateText: string;
  completed?: boolean;
}

export interface StudyModule {
  id: string;
  title: string;
  description: string;
  segments: StudySegment[];
}

export interface StudyTier {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  modules: StudyModule[];
}

export interface GeneratedLesson {
  subtopics: SubTopic[];
  socialCaption: string;
  certificateText: string;
}