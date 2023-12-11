package com.example.skilltreepoc;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.skilltreepoc.databinding.FragmentSecondBinding;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;

public class SecondFragment extends Fragment {

    private FragmentSecondBinding binding;

    private boolean is1Clicked = false;
    private boolean is2Clicked = false;
    private boolean is3Clicked = false;
    private boolean is4Clicked = false;

    @Override
    public View onCreateView(
            LayoutInflater inflater, ViewGroup container,
            Bundle savedInstanceState
    ) {

        binding = FragmentSecondBinding.inflate(inflater, container, false);
        return binding.getRoot();

    }

    public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        binding.btnTreeBranch1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                binding.cvTreeBranch1.setVisibility(View.VISIBLE);
            }
        });

        binding.btnOrientating.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (!is1Clicked && !is2Clicked &&!is3Clicked &&!is4Clicked) {
                    setPbLuProgress(10);
                }
                is1Clicked = true;
            }
        });

        binding.btnBeginning.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (is1Clicked && !is2Clicked &&!is3Clicked &&!is4Clicked) {
                    setPbLuProgress(10);
                } else if (!is2Clicked&&!is3Clicked &&!is4Clicked) {
                    setPbLuProgress(20);
                }
                is2Clicked = true;
            }
        });

        binding.btnProficient.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(!is4Clicked){
                if (is1Clicked && is2Clicked && !is3Clicked  ) {
                    setPbLuProgress(10);
                } else if (!is1Clicked || !is2Clicked && !is3Clicked ) {
                    setPbLuProgress(20);
                } else if(!is1Clicked && !is2Clicked && !is3Clicked) {
                    setPbLuProgress(30);
                }
                is3Clicked = true;
            }}
        });

        binding.btnAdvanced.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (is1Clicked && is2Clicked && is3Clicked && !is4Clicked) {
                    setPbLuProgress(10);
                } else if (!is1Clicked && !is2Clicked && is3Clicked && !is4Clicked) {
                    setPbLuProgress(20);
                } else if (!is1Clicked && is2Clicked && is3Clicked && !is4Clicked) {
                    setPbLuProgress(30);
                } else if (!is4Clicked) {
                    setPbLuProgress(40);
                }
                is4Clicked = true;
            }
        });
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }


    public void setPbLuProgress(int progress) {

        int oldProgress = binding.pbLuProgress.getProgress();
        binding.pbLuProgress.setProgress(oldProgress + progress);
    }
}