# git-lab1
Git lab practice

# Steps
1. Create seperate branch from master branch (i.e. lab-1-{user}-branch)
2. Modify Contacts.txt file and add your skype id on line # 2 and commit changes using appropriate message.
3. Push your branch on github
4. Create pull request on github

# Mostly used Commands

## Required Softwares
1.	Git Software : https://git-scm.com/downloads
2.	Git GUI Client for windows : https://www.sourcetreeapp.com/

3.	Account Setup
```
git config --global user.name "User-Name"
git config --global user.email email-id@domain.com
git config --global color.ui true   ( To enable coloring in console )
git config –global credential.helper store ( To save credentials )
git config --global --unset credential.helper
git config --system core.longpaths true
```

4.	Create a new (local) repository and push it to the Git server
```
a.	Create a Folder Git-Test and place some files in it.
 b.	Navigate to project folder
    cd Git-Test
 c.	Initialize Git repo
   git init .  [To initialize git repo]
   git status  [To check git repo status]
 d.	Stage all files of project folder
   git add .   [to stage files]
   git rm –cached {file-name} [to unstage files]
 e.	Commit your changes
   git commit –m “This is my commit message”
   git commit –amend [to modify last commit message]
   git commit --amend --author "New Author Name <email@address.com>" 
 f.	Reverting local changes
  git clean –f <file-name>  [ Remove Unstaged-Untracked file ]
  git checkout <file-name> [ Reset changes of Unstaged-Tracked files ]
  git rm –cached <file-name> [ Unstaging Staged files ]
  git reset  [Unstage-Tracked files and ]
  git reset –hard HEAD~1  [ Reverting last commit ]
  git reset –soft HEAD~1   [ Reverting last commit with retaining changes ]
  git reset –hard <commit-hash> [ Reverting all commits till commit-hash (excluding) ]

g.	Pushing Repository to Server
   git remote remove origin
   git remote add origin git@github.com:test-git-repo
   git remote set-url origin https://github.com/faisal-hameed-pk/test-git-repo.git
   git pull origin master
   git push origin master
```
```
5.	Clone Repository
 git clone git@[my.url.com]:[git-repo-name].git
6.	Reverting local changes
	git revert -n HEAD~1   >> will add revert commit
7. Renaming Remote branch
You just have to create a new local branch with the desired name, push it to your remote, and then delete the old remote branch:
$ git branch new-branch-name origin/old-branch-name
$ git push origin --set-upstream new-branch-name
$ git push origin :old-branch-name
Then, to see the old branch name, each client of the repository would have to do:
$ git fetch origin
$ git remote prune origin
or
First checkout to the branch which you want to rename
git branch -m old_branch new_branch
git push origin new_branch
To remove old branch from remote:
git push origin :old_branch_name

8. Squash and Rebase
>> git rebase -i {branch-name | commit-number | HEASE~5}
>> git rebase -i -p HEAD~5

9. Push branch forcefully
>> git push -f origin remote

9. Git Stash
git stash
git checkout branch2
git stash list       # to check the various stash made in different branch
git stash apply x    # to select the right one
```
## Links
1. http://blog.netgloo.com/2015/08/01/common-git-commands/
2. http://thelucid.com/2008/12/02/git-setting-up-a-remote-repository-and-doing-an-initial-push/
